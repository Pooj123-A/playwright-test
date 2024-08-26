
import { test, expect } from "@playwright/experimental-ct-react";
import App2375 from "../example/App2375.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2375 />);
  await expect(component).toContainText("Learn React");
});
