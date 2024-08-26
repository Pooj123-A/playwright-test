
import { test, expect } from "@playwright/experimental-ct-react";
import App72 from "../example/App72.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App72 />);
  await expect(component).toContainText("Learn React");
});
