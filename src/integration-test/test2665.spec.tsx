
import { test, expect } from "@playwright/experimental-ct-react";
import App2665 from "../example/App2665.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2665 />);
  await expect(component).toContainText("Learn React");
});
