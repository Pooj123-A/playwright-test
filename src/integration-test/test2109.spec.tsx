
import { test, expect } from "@playwright/experimental-ct-react";
import App2109 from "../example/App2109.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2109 />);
  await expect(component).toContainText("Learn React");
});
