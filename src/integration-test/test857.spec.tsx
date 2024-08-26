
import { test, expect } from "@playwright/experimental-ct-react";
import App857 from "../example/App857.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App857 />);
  await expect(component).toContainText("Learn React");
});
