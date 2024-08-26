
import { test, expect } from "@playwright/experimental-ct-react";
import App2912 from "../example/App2912.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2912 />);
  await expect(component).toContainText("Learn React");
});
