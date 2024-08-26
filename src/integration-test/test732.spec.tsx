
import { test, expect } from "@playwright/experimental-ct-react";
import App732 from "../example/App732.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App732 />);
  await expect(component).toContainText("Learn React");
});
