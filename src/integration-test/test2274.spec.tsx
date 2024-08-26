
import { test, expect } from "@playwright/experimental-ct-react";
import App2274 from "../example/App2274.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2274 />);
  await expect(component).toContainText("Learn React");
});
