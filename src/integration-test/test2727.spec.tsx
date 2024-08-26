
import { test, expect } from "@playwright/experimental-ct-react";
import App2727 from "../example/App2727.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2727 />);
  await expect(component).toContainText("Learn React");
});
