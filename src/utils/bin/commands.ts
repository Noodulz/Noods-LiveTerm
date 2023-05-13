// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi hi! I am ${config.name}. 
Welcome to my website! This terminal was forked and made courtesy of cveinnt.

I am a front-end and software developer currently working on some mobile and ML projects.
My hobbies include watching films, exploring new cities, reading, writing poetry, and playing video games!

More about me:
'sumfetch' - short summary.
'resume' - my latest resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `Welcome to

 ██████   █████    ███████       ███████    ██████████   █████  █████ █████       ███████████
░░██████ ░░███   ███░░░░░███   ███░░░░░███ ░░███░░░░███ ░░███  ░░███ ░░███       ░█░░░░░░███ 
 ░███░███ ░███  ███     ░░███ ███     ░░███ ░███   ░░███ ░███   ░███  ░███       ░     ███░  
 ░███░░███░███ ░███      ░███░███      ░███ ░███    ░███ ░███   ░███  ░███            ███    
 ░███ ░░██████ ░███      ░███░███      ░███ ░███    ░███ ░███   ░███  ░███           ███     
 ░███  ░░█████ ░░███     ███ ░░███     ███  ░███    ███  ░███   ░███  ░███      █  ████     █
 █████  ░░█████ ░░░███████░   ░░░███████░   ██████████   ░░████████   ███████████ ███████████
░░░░░    ░░░░░    ░░░░░░░       ░░░░░░░    ░░░░░░░░░░     ░░░░░░░░   ░░░░░░░░░░░ ░░░░░░░░░░░ 


Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
