
import { test, expect } from "@playwright/experimental-ct-react";
import App833 from "../example/App833.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App833 />);
  await expect(component).toContainText("Learn React");
});
