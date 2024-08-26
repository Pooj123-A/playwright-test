
import { test, expect } from "@playwright/experimental-ct-react";
import App394 from "../example/App394.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App394 />);
  await expect(component).toContainText("Learn React");
});
