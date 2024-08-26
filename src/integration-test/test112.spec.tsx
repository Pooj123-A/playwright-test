
import { test, expect } from "@playwright/experimental-ct-react";
import App112 from "../example/App112.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App112 />);
  await expect(component).toContainText("Learn React");
});
