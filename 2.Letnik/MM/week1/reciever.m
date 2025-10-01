function X = reciever(P, D)
% X = reciever(P, D) returns the position of the reciever
% as X = [x, y] given the positions of the transmitters [pi, qi] and
% distances [di] of the reciever from those transmitters

%form the matrix A for the corrresponding linear system
A = 2*(P(2:end, :) - P(1:(end-1), :));
%form the right-hand side of the coresponding linear system
b = D(1: (end-1), :).^2 - D(2:end, :).^2 ...
  - P(1: (end-1), 1).^2 + D(2:end, 1).^2 ...
  - P(1: (end-1), 2).^2 + D(2:end, 2).^2

%solve the system
X = (A\b)'*A*b;