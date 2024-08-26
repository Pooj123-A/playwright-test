
import { test, expect } from "@playwright/experimental-ct-react";
import App517 from "../example/App517.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App517 />);
  await expect(component).toContainText("Learn React");
});
