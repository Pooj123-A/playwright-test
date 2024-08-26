
import { test, expect } from "@playwright/experimental-ct-react";
import App262 from "../example/App262.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App262 />);
  await expect(component).toContainText("Learn React");
});
