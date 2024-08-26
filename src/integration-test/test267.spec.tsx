
import { test, expect } from "@playwright/experimental-ct-react";
import App267 from "../example/App267.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App267 />);
  await expect(component).toContainText("Learn React");
});
