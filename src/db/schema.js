/********************************************************
 * Dummy Data File
 *
 * I need to represent the following objects from rails:
 *
 *  :projects
 *  :current_user
 *
 * The, the React application can handle all of the
 * logic from there:
 *
 *  :browsing/editing/committing files => git
 *  :parsing yaml front matter, rendering as settings
 *  :render project specific settings => Bowtie API
 *  :parsing collections folders to render them
 *
 * 
 * Much of this can be done via async actions, and 
 * should be initialized in the background on first
 * load of the project.
 *
 * The following should be moved into background loads:
 *  :project_settings 
 *  :parse_collections
 * 
 * More should be added here for reference later.
 *
 * REQUEST URL FORMAT
 *
 * base_url => https://api.github.com/repos/
 * repo_url => :owner_or_org/:repo/
 * endpoint => :contents/
 * path     => :file_path
 *
 * ex. https://api.github.com/repos/:owner_or_org/:repo/contents/:file_path
 *
 * :file_path must include all parent directories, and the
 *  routing in the app is built to handle nested dirs.
 * 
 * 
 ********************************************************/



export const PROJECTS = [
  {
  id: "1",
  name: "igolden.github.io",
  full_name: "igolden/igolden.github.io",
  project_settings: {
    domain: {},
    hosting: {},
    stripe: {},
  },
  github_access_token: "f2d64d14d1b70994ed6a555140c6b6e9101c616c",
  current_user: {
    name: "Ian Golden",
    email: "ian@iangolden.com"
  }
},
  {
  id: "2",
  name: "igolden.github.io",
  full_name: "igolden/igolden.github.io",
  project_settings: {
    domain: {},
    hosting: {},
    stripe: {},
  },
  github_access_token: "f2d64d14d1b70994ed6a555140c6b6e9101c616c",
  current_user: {
    name: "Ian Golden",
    email: "ian@iangolden.com"
  }
},
  {
  id: "3",
  name: "igolden.github.io",
  full_name: "igolden/igolden.github.io",
  project_settings: {
    domain: {},
    hosting: {},
    stripe: {},
  },
  github_access_token: "f2d64d14d1b70994ed6a555140c6b6e9101c616c",
  current_user: {
    name: "Ian Golden",
    email: "ian@iangolden.com"
  }
},
]


export const PROJECT = {
  id: "1",
  name: "igolden.github.io",
  full_name: "igolden/igolden.github.io",
  project_settings: {
    domain: {},
    hosting: {},
    stripe: {},
  },
  github_access_token: "f2d64d14d1b70994ed6a555140c6b6e9101c616c",
  current_user: {
    name: "Ian Golden",
    email: "ian@iangolden.com"
  },
}



