
import { test, expect } from "@playwright/experimental-ct-react";
import App172 from "../example/App172.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App172 />);
  await expect(component).toContainText("Learn React");
});
