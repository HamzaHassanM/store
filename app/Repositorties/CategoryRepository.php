<?php

namespace App\Repositorties;

use App\Models\Category;

class CategoryRepository implements RepositoryInterface
{
    public $category;
    public  function __construct(Category $category)
    {
        $this->category = $category;
    }

    public function baseQuery($relations=[])
    {
        return $this->category->select('*')->with($relations);
    }


    public function getMainCategories()
    {
        return $this->category->where('parent_id', 0)->get();
    }

    public function store($params)
    {
       return $this->category->create($params);
    }

    public function getbyId($id, $childrenCount = false)
    {
        $query =  $this->category->where('id', $id);
        if ($childrenCount) {
            $query->withCount('child');
        }
        return $query->firstOrFail();
    }

    public function update($category, $params)
    {
        return $category->update($params);
    }

    public function delete($params)
    {
        $category = $this->getbyId($params['id']);
        return $category->delete();
    }
}
