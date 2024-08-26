
import { test, expect } from "@playwright/experimental-ct-react";
import App803 from "../example/App803.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App803 />);
  await expect(component).toContainText("Learn React");
});
