
import { test, expect } from "@playwright/experimental-ct-react";
import App422 from "../example/App422.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App422 />);
  await expect(component).toContainText("Learn React");
});
