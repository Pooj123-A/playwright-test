
import { test, expect } from "@playwright/experimental-ct-react";
import App26 from "../example/App26.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App26 />);
  await expect(component).toContainText("Learn React");
});
