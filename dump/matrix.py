import numpy as np

# vektorji podprostora
A1 = np.array([[2, -1],
     [1, 2],
     [2, 0],
     [1, 1]])

# vektor ki ga projeciramo
b1 = np.array([-3, 1, 7, 2])

def project(A, b):
    At = np.matrix.transpose(A)
    AtA = np.dot(At, A)
    invAtA = np.linalg.inv(AtA)
    r = np.dot(A, invAtA)
    r = np.dot(r, At)
    return np.dot(r, b)

print(project(A1, b1))
