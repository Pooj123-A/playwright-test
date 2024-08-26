
import { test, expect } from "@playwright/experimental-ct-react";
import App2477 from "../example/App2477.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2477 />);
  await expect(component).toContainText("Learn React");
});
