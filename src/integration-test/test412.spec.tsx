
import { test, expect } from "@playwright/experimental-ct-react";
import App412 from "../example/App412.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App412 />);
  await expect(component).toContainText("Learn React");
});
