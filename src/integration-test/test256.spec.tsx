
import { test, expect } from "@playwright/experimental-ct-react";
import App256 from "../example/App256.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App256 />);
  await expect(component).toContainText("Learn React");
});
