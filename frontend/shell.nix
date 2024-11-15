{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs_22
    nodePackages_latest.typescript-language-server
    nodePackages_latest.svelte-language-server
  ];
}
