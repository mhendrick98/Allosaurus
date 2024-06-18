# Allosaurus Cache 🦖

Welcome to Allosaurus Cache! This project provides a simple caching system for storing and retrieving JSON objects in the file system using Deno. It supports basic operations to read from and write to the cache with error handling. This README will guide you through the setup and usage of the Allosaurus Cache system.

## Features
* Read Cache: Retrieve JSON objects from the cache.
* Write Cache: Store JSON objects in the cache.
* Error Handling: Provides error handling for read and write operations.

## Prerequisites

* <strong>Deno</strong> must be installed on your machine.

## Getting Started

### Installation
Clone the repository to your local machine

```sh
git clone https://github.com/your-username/allosaurus-cache.git

cd allosaurus-cache
```

## Usage
Create a new <strong>Cache</strong> instance with a specified maximum capacity and location for the cache.

Writing to the Cache
To write a JSON object to the cache, use the <strong>alloWrite</strong> method.

Reading from the Cache
To read a JSON object from the cache, use the <strong>alloRead</strong> method.

## Example
* Create a new cache instance with the desired maximum capacity and cache location.
* Write a JSON object to the cache.
* Read the JSON object from the cache.

## API Reference

Cache <strong>Class</strong>

### Constructor

* #### Parameters

* <strong>maxCap</strong> (number): Maximum number of files allowed in the cache.
* <strong>location</strong> (string): Directory path where cache files will be stored.

## Methods

* <strong>alloRead(name: string): Promise</strong><object>

* Reads a JSON file from the cache.
* #### Parameters:
   * <strong>name</strong> (string): The name of the cache file (without extension).
* <strong>Returns</strong>: A promise that resolves to the JSON object read from the cache or an error object if the operation fails.
* <strong>alloWrite(name: string, obj: object)</strong>: Promise<boolean>

* Writes a JSON object to the cache.

* #### Parameters:
    * <strong>name</strong> (string): The name of the cache file (without extension).
    * <strong>obj</strong> (object): The JSON object to be written to the cache.
* <strong>Returns</strong>: A promise that resolves to true if the operation is successful, or false if it fails.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a feature request.

## License
This project is licensed under the MIT License. See the <strong>LICENSE</strong> file for details.






