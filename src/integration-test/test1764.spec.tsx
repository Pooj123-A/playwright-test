
import { test, expect } from "@playwright/experimental-ct-react";
import App1764 from "../example/App1764.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1764 />);
  await expect(component).toContainText("Learn React");
});
