<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">EndPoints</h2>
      <ul class="bg-white shadow rounded-lg divide-y divide-gray-200">
        <li class="flex items-center justify-between p-4">
          <span class="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">GET</span>
          <div class="ml-4 flex-grow">
            <div class="font-bold">http://localhost:3000/api/user</div>
          </div>
        </li>
  
        <li class="flex items-center justify-between p-4">
          <span class="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">GET</span>
          <div class="ml-4 flex-grow">
            <div class="font-bold">http://localhost:3000/api/user/:id</div>
          </div>
        </li>
  
        <li class="flex items-center justify-between p-4">
          <span class="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">DELETE</span>
          <div class="ml-4 flex-grow">
            <div class="font-bold">http://localhost:3000/api/user/:id</div>
          </div>
        </li>
  
        <li class="flex items-center justify-between p-4">
          <span class="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">POST</span>
          <div class="ml-4 flex-grow">
            <div class="font-bold">http://localhost:3000/api/user</div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  