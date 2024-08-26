
import { test, expect } from "@playwright/experimental-ct-react";
import App55 from "../example/App55.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App55 />);
  await expect(component).toContainText("Learn React");
});
