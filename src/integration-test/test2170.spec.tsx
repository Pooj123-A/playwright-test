
import { test, expect } from "@playwright/experimental-ct-react";
import App2170 from "../example/App2170.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2170 />);
  await expect(component).toContainText("Learn React");
});
