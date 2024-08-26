
import { test, expect } from "@playwright/experimental-ct-react";
import App651 from "../example/App651.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App651 />);
  await expect(component).toContainText("Learn React");
});
