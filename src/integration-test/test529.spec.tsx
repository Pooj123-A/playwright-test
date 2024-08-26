
import { test, expect } from "@playwright/experimental-ct-react";
import App529 from "../example/App529.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App529 />);
  await expect(component).toContainText("Learn React");
});
