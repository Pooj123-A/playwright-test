
import { test, expect } from "@playwright/experimental-ct-react";
import App2305 from "../example/App2305.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2305 />);
  await expect(component).toContainText("Learn React");
});
