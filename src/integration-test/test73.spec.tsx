
import { test, expect } from "@playwright/experimental-ct-react";
import App73 from "../example/App73.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App73 />);
  await expect(component).toContainText("Learn React");
});
