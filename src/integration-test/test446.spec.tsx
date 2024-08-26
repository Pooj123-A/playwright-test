
import { test, expect } from "@playwright/experimental-ct-react";
import App446 from "../example/App446.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App446 />);
  await expect(component).toContainText("Learn React");
});
