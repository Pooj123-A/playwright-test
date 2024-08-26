
import { test, expect } from "@playwright/experimental-ct-react";
import App2902 from "../example/App2902.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2902 />);
  await expect(component).toContainText("Learn React");
});
