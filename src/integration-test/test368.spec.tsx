
import { test, expect } from "@playwright/experimental-ct-react";
import App368 from "../example/App368.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App368 />);
  await expect(component).toContainText("Learn React");
});
