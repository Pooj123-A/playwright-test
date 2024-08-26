
import { test, expect } from "@playwright/experimental-ct-react";
import App1669 from "../example/App1669.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1669 />);
  await expect(component).toContainText("Learn React");
});
