
import { test, expect } from "@playwright/experimental-ct-react";
import App75 from "../example/App75.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App75 />);
  await expect(component).toContainText("Learn React");
});
