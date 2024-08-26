
import { test, expect } from "@playwright/experimental-ct-react";
import App2501 from "../example/App2501.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2501 />);
  await expect(component).toContainText("Learn React");
});
