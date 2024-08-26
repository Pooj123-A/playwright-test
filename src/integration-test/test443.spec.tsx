
import { test, expect } from "@playwright/experimental-ct-react";
import App443 from "../example/App443.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App443 />);
  await expect(component).toContainText("Learn React");
});
