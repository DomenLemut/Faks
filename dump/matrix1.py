import numpy as np

matrix = np.array(
	[[1, -1, 1, 2],
     [-1, -1, 1, 0],
     [2, -2, 2, 0], 
     [3, 1, 1, -1]])


eigenvalues = np.linalg.det(matrix)

print(eigenvalues)
