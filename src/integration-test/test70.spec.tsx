
import { test, expect } from "@playwright/experimental-ct-react";
import App70 from "../example/App70.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App70 />);
  await expect(component).toContainText("Learn React");
});
