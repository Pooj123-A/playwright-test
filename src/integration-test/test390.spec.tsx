
import { test, expect } from "@playwright/experimental-ct-react";
import App390 from "../example/App390.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App390 />);
  await expect(component).toContainText("Learn React");
});
