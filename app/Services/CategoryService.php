<?php

namespace App\Services;

use App\Models\Category;
use App\Utils\ImageUpload;
use Yajra\DataTables\Facades\DataTables;

class CategoryService
{


    public function getMainCategories()
    {
        return Category::where('parent_id', 0)->orWhere('parent_id', null)->get();
    }


    public function store($params)
    {
        $params['parent_id'] = $params['parent_id'] ?? 0;
        if (isset($params['image'])) {
            $params['image'] = ImageUpload::uploadImage($params['image']);
        }

        return  Category::create($params);
    }


    public function getById($id, $childrenCount = false)
    {
        $query =  Category::where('id', $id);
        if($childrenCount){
            $query->withCount('child');
        }
        return $query->firstOrFail();
    }

    public function update($id,$params)
    {
        $category = $this->getById($id);
        $params['parent_id'] = $params['parent_id'] ?? 0;
        if (isset($params['image'])) {
            $params['image'] = ImageUpload::uploadImage($params['image']);
        }

        return  $category->update($params);
    }




    public function datatable()
    {
        $query = Category::select('*')->with('parent');
        return  DataTables::of($query)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                return $btn = '
                        <a href="' . Route('dashboard.categories.edit', $row->id) . '"  class="edit btn btn-success btn-sm" ><i class="fa fa-edit"></i></a>

                        <button type="button" id="deleteBtn"  data-id="' . $row->id . '" class="btn btn-danger mt-md-0 mt-2" data-bs-toggle="modal"
                        data-original-title="test" data-bs-target="#deletemodal"><i class="fa fa-trash"></i></button>';
            })

            ->addColumn('parent', function ($row) {
                if ($row->parent) {
                    return $row->parent->name;
                }
                return 'قسم رئيسي';

                // return ($row->parent ==  0) ? 'قسم رئيسي' :   $row->parents->name;
            })

            ->addColumn('image', function ($row) {
                return '<img src="' . asset($row->image) . '" width="100px" height="100px">';
            })

            ->rawColumns(['parent', 'action', 'image'])
            ->make(true);
    }
}
