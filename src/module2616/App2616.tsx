
import { test, expect } from "@playwright/experimental-ct-react";
import App2616 from "./App2616.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2616 />);
  await expect(component).toContainText("Learn React");
});
