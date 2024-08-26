
import { test, expect } from "@playwright/experimental-ct-react";
import App2338 from "../example/App2338.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2338 />);
  await expect(component).toContainText("Learn React");
});
