<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class RegisterController extends Controller
{
    public function create() {
        return view('auth.register');
    }

    public function store() {

        $this->validate(request(), [
            'name' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'tel' => 'required',
            'position' => 'required',
            'age' => 'required',
            'gender' => 'required',
            'salary' => 'required',
            'date' => 'required',
            'password' => 'required|confirmed',
            
        ]);

        $user = User::create(request(['name', 'lastname', 'email', 'tel', 'position', 'age', 'gender', 'salary', 'date', 'password']));

        auth()->login($user);
        return redirect()->to('/');

    }
}

