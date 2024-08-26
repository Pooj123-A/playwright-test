
import { test, expect } from "@playwright/experimental-ct-react";
import App2577 from "../example/App2577.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2577 />);
  await expect(component).toContainText("Learn React");
});
