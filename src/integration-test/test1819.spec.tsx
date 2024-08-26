
import { test, expect } from "@playwright/experimental-ct-react";
import App1819 from "../example/App1819.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1819 />);
  await expect(component).toContainText("Learn React");
});
