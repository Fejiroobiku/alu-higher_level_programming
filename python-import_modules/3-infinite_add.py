#!/usr/bin/env python3
import sys

if __name__ == "__main__":
    # Get all command-line arguments except the first one (script name)
    args = sys.argv[1:]
    
    # Convert arguments to integers and sum them
    total = sum(int(arg) for arg in args)
    
    # Print the result
    print(total)
